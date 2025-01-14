import MediakronView from '~/core-js/extensions/views';
import $ from "jquery";
import _ from "lodash";
import tpl  from "./templates/default.html";

var view = false;

export default class Text extends MediakronView {

    /**
     * The constructor for the backbone class
     * @param {object} options 
     */
    constructor(options) {
        // execute the parent options first
        super({
            className: 'item-page',
            layout: false,
            annotate: 'full',
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
     * @param {object} model
     */
    initialize(model) {
        this.model = model;
    }

    /**
     * Render the view
     */
    render() {
        if (this.layout) {
            this.template = JST['pages.text.' + this.layout];
            if (this.layout == 'comparison') {
                this.annotate = 'minimal';
            }
        } else if (this.model.get('template')) {
            this.template = JST['pages.text.' + this.model.get('template')];
        }
        var content = this.model.toJSON();
        if (this.model.comparison) content.comparison = this.model.comparison;
        content.model = this.model;
        content.item = this.model;
        this.$el.html(this.template(content));
        return this;
    }

    get events() {
        return {
            'click a': Mediakron.linkHandle,
            'click .panel-heading': Mediakron.sidebarPanelOpen,
            'click .panel-body a': Mediakron.linkHandle,
            'click #toggleSidebar': Mediakron.sidebarHandle,
            'click .remove': 'removeFromComparison',
            'click .comparison-description-button': 'showCompareDescription',
            'keypress .searchPdf': 'search'
        }
    }

    afterrender() {
        console.log(arguments.callee.caller);
        var view = this,
            text = this.model.get('text'),
            type = text.type;
        this.model.getSidebar(this.$el);
        $(".annotate img", this.$el).annotateImage({
            editable: true,
            zoomType: this.annotate,
            model: this.model,
            notes: this.model.getRelationship('annotations')
        });
        if (type == 'pdf') {
            $('#viewer-' + view.model.get('uri')).empty();
            PDFJS.getDocument(Mediakron.Settings.filepath + text.url).then(function(pdf) {
                // Using promise to fetch the page
                view.numPages = pdf.numPages;
                var i = 1,
                    $pages = $('.pages', view.$el);
                for (i; i <= view.numPages; i++) {
                    $pages.append('<span class="gotoPage" page="' + i + '">' + i + '</span>');
                }
                view.canvas = document.getElementById('viewer-' + view.model.get('uri'));
                view.context = view.canvas.getContext('2d');
                view.pdf = pdf;
                view.loadPage(1);
            });
        }
        if (type == 'word' || type == 'ppt') {
            var preview = new Mediakron.Pages.textPreview(this.model);
        }
        
        /* Load accessible dropdown menu plugin  */
        accessibleNav();
    }

    /**
     * search
     * @param {object} e
     */
    search(e) {
        var val = $(e.currentTarget).val();
    }

    /**
     * Show Compare Description
     * @param {object} 
     */
    showCompareDescription() {
        $('.comparison-description', this.$el).toggleClass('hidden');
    }

    /**
     * Remove From Comparison:
     * @param {object}  
     */
    removeFromComparison() {
        this.model.comparison.remove(this.model, false);
        this.model.comparison.save();
    }
}

// @REVIEW then, delete. Original view below

// Mediakron.Pages.text = Mediakron.Extensions.View.extend({
//     template: JST['pages.text.default'],
//     className: 'item-page',
//     layout: false,
//     annotate: 'full',
//     initialize: function(model) {
//         this.model = model;
//     },
//     afterRender: function() {
//         console.log(arguments.callee.caller);
//         var view = this,
//             text = this.model.get('text'),
//             type = text.type;
//         this.model.getSidebar(this.$el);
//         $(".annotate img", this.$el).annotateImage({
//             editable: true,
//             zoomType: this.annotate,
//             model: this.model,
//             notes: this.model.getRelationship('annotations')
//         });
//         if (type == 'pdf') {
//             $('#viewer-' + view.model.get('uri')).empty();
//             PDFJS.getDocument(Mediakron.Settings.filepath + text.url).then(function(pdf) {
//                 // Using promise to fetch the page
//                 view.numPages = pdf.numPages;
//                 var i = 1,
//                     $pages = $('.pages', view.$el);
//                 for (i; i <= view.numPages; i++) {
//                     $pages.append('<span class="gotoPage" page="' + i + '">' + i + '</span>');
//                 }
//                 view.canvas = document.getElementById('viewer-' + view.model.get('uri'));
//                 view.context = view.canvas.getContext('2d');
//                 view.pdf = pdf;
//                 view.loadPage(1);
//             });
//         }
//         if (type == 'word' || type == 'ppt') {
//             var preview = new Mediakron.Pages.textPreview(this.model);
//         }
        
//         /* Load accessible dropdown menu plugin  */
//         accessibleNav();
//     },
//     render: function() {
//         if (this.layout) {
//             this.template = JST['pages.text.' + this.layout];
//             if (this.layout == 'comparison') {
//                 this.annotate = 'minimal';
//             }
//         } else if (this.model.get('template')) {
//             this.template = JST['pages.text.' + this.model.get('template')];
//         }
//         var content = this.model.toJSON();
//         if (this.model.comparison) content.comparison = this.model.comparison;
//         content.model = this.model;
//         content.item = this.model;
//         this.$el.html(this.template(content));
//         return this;
//     },
//     events: {
//         'click a': Mediakron.linkHandle,
//         'click .panel-heading': Mediakron.sidebarPanelOpen,
//         'click .panel-body a': Mediakron.linkHandle,
//         'click #toggleSidebar': Mediakron.sidebarHandle,
//         'click .remove': 'removeFromComparison',
//         'click .comparison-description-button': 'showCompareDescription',
//         'keypress .searchPdf': 'search'
//     },
//     search: function(e) {
//         var val = $(e.currentTarget).val();
//     },
//     showCompareDescription: function() {
//         $('.comparison-description', this.$el).toggleClass('hidden');
//     },
//     removeFromComparison: function() {
//         this.model.comparison.remove(this.model, false);
//         this.model.comparison.save();
//     }
// });
