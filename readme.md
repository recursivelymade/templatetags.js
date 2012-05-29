Template Tags
=============

This is a [JSDoc's](https://github.com/jsdoc3/jsdoc) plugin to enable documenting mustache.js templates in your JS documentation.

Install the js file into your jsdoc/plugins folder and update your conf.json file with
```JSON
"plugins": [
    "plugins/templatestags",
],
```

In your js file add @template your.template.object

And then in your template add
====================
```HTML
<?js if (doc.templates && doc.templates.length) { ?>
    <h2 class="subsection-title">Templates</h2>
    <ul><?js doc.templates.forEach(function(r) { ?>
        <li><?js= self.linkto(r, r) ?></li>
    <?js }); ?></ul>
<?js } ?>
```