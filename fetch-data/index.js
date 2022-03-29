const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    page.setJavaScriptEnabled(false);

    await page.goto('https://www.foodsdictionary.co.il/Products/1/%D7%90%D7%92%D7%A1');

    await page.waitForSelector('#pageHeader');

    let [name, company] = await page.$$eval('#pageHeader h1', nameAndCompany => {
        return nameAndCompany[0].textContent.split(',').map(t => t?.trim());
    });

    let details2 = await page.$$('table.nv-table tr')

    const ret = {};
    details2.map(r => {
        const tds = r.querySelectorAll('td');
        console.log(tds[0]);
        if (tds.length == 2 && !Number.isNaN(Number(tds[1]?.textContent))) {
            ret[tds[0].textContent] = Number(tds[1].textContent);
        }
    });


    console.log(name, company, ret)



    await browser.close();
})();