import MediakronView from '~/core-js/extensions/views';
import $ from "jquery";
import _ from "lodash";
import tpl  from "./templates/default.html";

var view = false;

export default class File extends MediakronView {

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
            preview: false,
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
    initialize(model) {
        this.model = model;
    }

    /**
     * Render the view
     */
    render() {
        if (this.layout) {
            this.template = JST['pages.file.' + this.layout];
            if (this.layout == 'comparison') {
                this.annotate = 'minimal';
            }
        } else if (this.model.get('template')) {
            this.template = JST['pages.file.' + this.model.get('template')];
        }
        var content = this.model.toJSON();
        if (this.model.comparison) content.comparison = this.model.comparison;
        content.model = this.model;
        content.item = this.model;
        content.viewer = JST['pages.file.viewer']();
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
            'click .pdf-thumbnail-toggle button': 'pdfThumbnails',
            'click .pdfZoomIn': 'pdfZoomin',
            'click .pdfZoomOut': 'pdfZoomout',
            'click .doSearch': 'pdfSearch',
            'click .clearSearch': 'pdfClearsearch',
            'mousedown .searchPdf': 'removeClearbutton',
            'keypress .searchPdf': 'keyhandler',
        }
    }

    afterrender() {
        afterRender: function() {
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
            if (type == 'pdf' || type == 'doc' || type == 'xls' || type == 'ppt') {
                var viewer = $('#viewer-' + view.model.get('uri'));
                viewer.empty();
                require(["/mediakron/js/src/preview/preview.js"], function(docPreview) {
                    view.preview = new docPreview(viewer, view.model.get('uri'));
                });
            }
            
            /* Load accessible dropdown menu plugin  */
            accessibleNav();
    }

    /**
     * Show Compare Description
     * @param {object} 
     */
    showCompareDescription() {
        $('.comparison-description', this.$el).toggleClass('hidden');
    }

    /**
     * Remove From Comparison
     * @param {object} 
     */
    removeFromComparison() {
        this.model.comparison.remove(this.model, false);
        this.model.comparison.save();
    }

    /**
     * pdfThumbnails
     * @param {object} 
     */
    pdfThumbnails() {
        $('.pdfThumbnails', this.$el).toggleClass('thumbnails-visibility');
        $('.pdf-container', this.$el).toggleClass('thumbnails-visibility');
        $('.pdf-thumbnail-toggle button', this.$el).toggleClass('thumbnails-visibility');
    }
    
    /**
     * pdf Zoomin
     * @param {object} 
     */
    pdfZoomin() {
        $('.pdfZoomIn', this.$el).addClass('active');
        $('.pdfZoomOut', this.$el).removeClass('active');
    }

    /**
     * pdf Zoomout
     * @param {object} 
     */ 
    pdfZoomout() {
        $('.pdfZoomOut', this.$el).addClass('active');
        $('.pdfZoomIn', this.$el).removeClass('active');
    }

    /**
     * pdf Search 
     * @param {object} 
     */
    pdfSearch() {
        $('.doSearch', this.$el).addClass('hide');
        $('.clearSearch', this.$el).removeClass('hide');
        $('.searchNav', this.$el).removeClass('hide');
    }

    /**
     * pdf Clear search
     * @param {object} 
     */
    pdfClearsearch() {
        $('.doSearch', this.$el).removeClass('hide');
        $('.clearSearch', this.$el).addClass('hide');
        $('.searchNav', this.$el).addClass('hide');
        $('.searchPdf').val('');
    }

    /**
     * Remove Clear Button
     * @param {object} 
     */
    removeClearbutton() {
        $('.doSearch', this.$el).removeClass('hide');
        $('.clearSearch', this.$el).addClass('hide');
        $('.searchNav', this.$el).addClass('hide');
    }

    /**
     * Keyhandler
     * @param {object} e 
     */
    keyhandler(e) { 
        if(e.keyCode == 13){
          var search = $(e.currentTarget).val();
          this.preview.search(search);
          $('.doSearch', this.$el).addClass('hide');
          $('.clearSearch', this.$el).removeClass('hide');
          $('.searchNav', this.$el).removeClass('hide');
        }
    }
}

// @REVIEW then, delete. Original view below

// Mediakron.Pages.file = Mediakron.Extensions.View.extend({
//     template: JST['pages.file.default'],
//     className: 'item-page',
//     layout: false,
//     annotate: 'full',
//     preview: false,
//     initialize: function(model) {
//         this.model = model;
//     },
//     afterRender: function() {
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
//         if (type == 'pdf' || type == 'doc' || type == 'xls' || type == 'ppt') {
//             var viewer = $('#viewer-' + view.model.get('uri'));
//             viewer.empty();
//             require(["/mediakron/js/src/preview/preview.js"], function(docPreview) {
//                 view.preview = new docPreview(viewer, view.model.get('uri'));
//             });
//         }
        
//         /* Load accessible dropdown menu plugin  */
//         accessibleNav();
//     },
//     render: function() {
//         if (this.layout) {
//             this.template = JST['pages.file.' + this.layout];
//             if (this.layout == 'comparison') {
//                 this.annotate = 'minimal';
//             }
//         } else if (this.model.get('template')) {
//             this.template = JST['pages.file.' + this.model.get('template')];
//         }
//         var content = this.model.toJSON();
//         if (this.model.comparison) content.comparison = this.model.comparison;
//         content.model = this.model;
//         content.item = this.model;
//         content.viewer = JST['pages.file.viewer']();
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
//         'click .pdf-thumbnail-toggle button': 'pdfThumbnails',
//         'click .pdfZoomIn': 'pdfZoomin',
//         'click .pdfZoomOut': 'pdfZoomout',
//         'click .doSearch': 'pdfSearch',
//         'click .clearSearch': 'pdfClearsearch',
//         'mousedown .searchPdf': 'removeClearbutton',
//         'keypress .searchPdf': 'keyhandler',
//     },
//     showCompareDescription: function() {
//         $('.comparison-description', this.$el).toggleClass('hidden');
//     },
//     removeFromComparison: function() {
//         this.model.comparison.remove(this.model, false);
//         this.model.comparison.save();
//     },
//     pdfThumbnails: function() {
//         $('.pdfThumbnails', this.$el).toggleClass('thumbnails-visibility');
//         $('.pdf-container', this.$el).toggleClass('thumbnails-visibility');
//         $('.pdf-thumbnail-toggle button', this.$el).toggleClass('thumbnails-visibility');
//     },
//     pdfZoomin: function() {
//         $('.pdfZoomIn', this.$el).addClass('active');
//         $('.pdfZoomOut', this.$el).removeClass('active');
//     },
//     pdfZoomout: function() {
//         $('.pdfZoomOut', this.$el).addClass('active');
//         $('.pdfZoomIn', this.$el).removeClass('active');
//     },
//     pdfSearch: function() {
//         $('.doSearch', this.$el).addClass('hide');
//         $('.clearSearch', this.$el).removeClass('hide');
//         $('.searchNav', this.$el).removeClass('hide');
//     },
//     pdfClearsearch: function() {
//         $('.doSearch', this.$el).removeClass('hide');
//         $('.clearSearch', this.$el).addClass('hide');
//         $('.searchNav', this.$el).addClass('hide');
//         $('.searchPdf').val('');
//     },
//     removeClearbutton: function() {
//         $('.doSearch', this.$el).removeClass('hide');
//         $('.clearSearch', this.$el).addClass('hide');
//         $('.searchNav', this.$el).addClass('hide');
//     },
//     keyhandler: function(e) { 
//         if(e.keyCode == 13){
//           var search = $(e.currentTarget).val();
//           this.preview.search(search);
//           $('.doSearch', this.$el).addClass('hide');
//           $('.clearSearch', this.$el).removeClass('hide');
//           $('.searchNav', this.$el).removeClass('hide');
//         }
//     },
// });