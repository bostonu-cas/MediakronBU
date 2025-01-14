import MediakronView from '~/core-js/extensions/views';
import $ from "jquery";
import _ from "lodash";
import tpl  from "./site-cache.html";

var view = false;

export default class SiteCache extends MediakronView {

    /**
     * The constructor for the backbone class
     * @param {object} options 
     */
    constructor(options) {
        // execute the parent options first
        super({
            className: 'classname',
            data: false,
            item: false,
        })
        this.data = {};
            if (!this.changes) {
                this.changes = Mediakron.Settings;
            }
        view = this;
    }

    // Cast the html template 
    get template() { 
        return _.template(tpl); 
    }

    /**
     * 
     * @param {object} data 
     */
    initialize(data) {
        return this;
    }

    /**
     * Render the view
     */
    render() {
        this.$el.html(this.template(this.data)).addClass(this.className);
        return this;
    }

    get events() {
        return {
            'click a': Mediakron.linkHandle,
            'click #done-editing': Mediakron.Edit.saveSettingsForm,
            'click #clear-cache': 'clearCache',
            'click #cancel-editing': Mediakron.Edit.cancelEdit,
            'click #close-settings-context': Mediakron.Edit.cancelEdit,
            'click .overlay-bg': Mediakron.Edit.cancelEdit,
            'click .close-button': Mediakron.Edit.cancelEdit
        }
    }

    /**
     * Clear Site Cache
     * @param {object}
     */
    clearCache() {
        $.getJSON(Mediakron.Settings.basepath + 'cache/generate', function(data) {
            Mediakron.message({
                'type': 'success',
                'timeout': 4000,
                'layout': 'bottom',
                'text': 'Cache Regenerated'
            });
        });
    }
}

// @REVIEW then, delete. Original view below

// Mediakron.Admin.PerformancePage = Mediakron.Extensions.View.extend({
//     template: JST['settings.performance'],
//     type: false,
//     changes: false,
//     initialize: function(type) {
//         if (!this.changes) {
//             this.changes = Mediakron.Settings;
//         }
//     },
//     render: function() {
//         var content = {};
//         $(this.el).html(this.template(content));
//         return this;
//     },
//     afterRender: function() {},
//     events: {
//         'click a': Mediakron.linkHandle,
//         'click #done-editing': Mediakron.Edit.saveSettingsForm,
//         'click #clear-cache': 'clearCache',
//         'click #cancel-editing': Mediakron.Edit.cancelEdit,
//         'click #close-settings-context': Mediakron.Edit.cancelEdit,
//         'click .overlay-bg': Mediakron.Edit.cancelEdit,
//         'click .close-button': Mediakron.Edit.cancelEdit
//     },
//     clearCache: function() {
//         $.getJSON(Mediakron.Settings.basepath + 'cache/generate', function(data) {
//             Mediakron.message({
//                 'type': 'success',
//                 'timeout': 4000,
//                 'layout': 'bottom',
//                 'text': 'Cache Regenerated'
//             });
//         });
//     }
// });