CREATE OR REPLACE VIEW beer_deals AS
SELECT beer, brewer, pkg.qty, pkg.size, pkg.container, store.name, "googleId", price.price FROM
beers join price on beers.id = price."beerId"
join store on store.id = price."storeId"
join pkg on pkg.id = price."pkgId";
