var express = require('express'),
app = express.createServer();

app.get('/', function(req, res) {
    res.send('Express deneme');
});
app.get('/urun/:id', function(req, res) {
    res.send('Talep edilen ürün:'+req.params.id);
});
app.use(function(req, res, next) {
    res.send("Böyle bir sayfa yok ki", 404);
});

app.get('/firstHtmlPage/:id', function(req, res) {
    res.render("firstHtmlPage.ejs", {itemRequested:req.params.id,layout:false});
});

app.get('/myFirstPage',function(req,res)
{
    
});

app.listen(process.env.PORT || 8080);