# diet-recipes

[![CodeQL](https://github.com/YaakovHatam/diet-recipes/actions/workflows/codeql.yml/badge.svg)](https://github.com/YaakovHatam/diet-recipes/actions/workflows/codeql.yml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e77de2085e644c21a06a5a76ec433b87)](https://www.codacy.com/gh/YaakovHatam/diet-recipes/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=YaakovHatam/diet-recipes&amp;utm_campaign=Badge_Grade)

- `git pull` - get latest version

## Bring food objects - code snippet
seach in google: site:foodsdictionary.co.il/Products
https://www.foodsdictionary.co.il/Products/1/%D7%90%D7%92%D7%A1

```javascript
const product = {};
const nameAndCompany = document.querySelector('#pageHeader h1').innerText.split(',');
product.name = nameAndCompany[0];
product.comapny = nameAndCompany[1] ? nameAndCompany[1].trim() : null;
document.querySelectorAll('table.nv-table tr').forEach(r => {
        const tds = r.querySelectorAll('td');
        if (tds.length  == 2) {
            if (tds[0]) {
                const tempNumber = Number( tds[1]?.innerText );
               
            product[tds[0].innerText] =  Number.isNaN(tempNumber)  ? tds[1]?.innerText : tempNumber
            }
        }
});

const products = JSON.parse(window.localStorage.getItem("products")) || [];
products.push(product);
window.localStorage.setItem("products", JSON.stringify(products));
```
