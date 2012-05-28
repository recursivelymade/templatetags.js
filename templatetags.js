/**
@module plugins/templates
@author Pete McVicar
**/

exports.handlers = {
/**
Support @templates tag. Expected value like: template.viewName
**/
    newDoclet: function(e) {
        var tags = e.doclet.tags,
            tag;

        if (typeof tags !== 'undefined') {
            tags = tags.filter(function($) {
                return $.title === 'templates';
            });

            if (tags.length) {
				tag = ["uhuh"];

				for (var tagValue in tags){
					tag.push(tags[tagValue].value);
				}

                !e.doclet.templates && (e.doclet.templates = {});
                e.doclet.templates = tag;
            }
        }
    }
};