import { GetterTree } from 'vuex';

export const getters = {
    /**
     * * List
    */
    items: state => state.itemList,
    

    listIsLoading: state => state.listIsLoading,
    listIsLoaded: state => state.listIsLoaded,
    listIsError: state => state.listIsError,
    listIsEmpty: state => !(state.itemList && state.itemList.length > 0 && state.listIsLoading)? true : false,

    isUploading: state => state.isUploading,
    isUploaded: state => state.isUploaded,

    /**
     * Current
     */
    current: state => state.current,
    parent: state => state.parent,
    grandparent: state => state.grandparent,
    parentType: state => (state.parent) ? state.parent.type : false,
    grandParentType: state => (state.grandparent) ? state.grandparent.type : false,

    isEditing: state => (state.isEditing) ? state.isEditing : false,
    isCreating: state => (state.isCreating) ? state.isCreating : false,
    editItem: state => (state.editItem) ? state.editItem : false,
    
    itemIsLoading: state => state.itemIsLoading,
    itemIsLoaded: state => state.itemIsLoaded,
    itemIsError: state => state.itemIsError,
    itemIsEmpty: state => !(state.currentItem && state.itemIsLoading)? true : false,
    getState: state => state,
    tagsLoading: state => state.tagsLoading,
    tagsLoaded: state => state.tagsLoaded,


    currentPage: state => state.pagination.currentPage,
    totalItems: state => state.pagination.total,
    lastPage: state => state.pagination.lastPage,
    tags: state => state.tags,

    counts: state => state.count,


};

export default getters;