Mediakron.Search.elasticSearch = Mediakron.ContentBrowser.View.extend({
    el:'.search-results',
    template: JST['settings.browser.content.elasticsearch'],
    title: 'Search Results',
    context: 'elasticsearch',
    help: '',
    noresult:'settings.browser.no.results.search',
    initialize: function (data) {
        if(data.item){
            Mediakron.Status.Managing = data.item;
            this.item = data.item;
        }
        
        this.query.thumbnails = '75';
        this.query.thumbnail = data.thumbnail;     
        this.query.sort = data.sort;             
        this.query.filter = data.filters;         
        this.query.skip = data.skip;             
        this.query.search = data.search;   
        this.query.result = data.result;   
        this.query.disabled = data.disabled;   

        if(data.context){ this.context = data.context; }
        if(data.callback){ this.callback = data.callback; }
        $('body').addClass(this.className);
        this.items = Mediakron.items;
        this.topics = Mediakron.topics;
        this.maps = Mediakron.maps;
        this.timelines = Mediakron.timelines;
        this.comparisons = Mediakron.comparisons;
    },
    search:function(value,callback){
        view = this;

        $.post( Mediakron.Data.search.query + value, function( data ) {
            $('table#admin-content').html("We're looking...");
        }).done(function( data ) {
            
            view.process(data);
            //view.tbody.update();
            view.tbody.reset = true;
            view.render().afterRender(true);
            
            callback();
        });
    },
    process: function(data){
        this.query.result = {};
        if(!data.timed_out){
            var total = data.hits.total, i = 0, hit, item;
            if(total > 0){
                for(i;i < total; i++){
                    hit = data.hits.hits[i];
                    if(hit){
                        item = Mediakron.items.get(hit._id);
                        if(item){
                            hit.uri = item.get('uri');
                            item.set('hit',hit);
                            this.query.result[hit.uri] = hit;
                        }
                    }
                }
            }else{
                $('table#admin-content').html("No Results.");
            }
        }else{
            $('table#admin-content').html("Error");
        }
        
    }
    
});
