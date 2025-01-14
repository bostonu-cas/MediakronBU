<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Scopes\RelationshipScope;


class Relationship extends BaseModel
{
     /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    public function parent()
    {
        return $this->belongsTo('App\Models\Item', 'parent_id');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    public function child()
    {
        return $this->belongsTo('App\Models\Item', 'child_id');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    public function attachment()
    {
        return $this->belongsTo('App\Models\Item', 'attachment_id');
    }

    /**
     * Set options attribute
     *
     * @param [type] $value
     * @return void
     */
    public function setDataAttribute($value){
        $this->attributes['data'] = json_encode($value);
    }

    /**
     * Undocumented function
     *
     * @param [type] $value
     * @return void
     */
    public function getDataAttribute($value){
        return json_decode($value);
    }

    /**
     * Convert the model instance to an array
     * because we don't often want the full
     * data in relationships
     *
     * @return array
     */
    public function toRelationshipArray()
    {
        $table = $this->getTable();
        $resource = str_singular($table) . '/';
        $data = (array) json_decode($this->data);

        if ($this->relationLoaded('child')){
            $data['id'] = $this->child->id;
            $data['title'] = $this->child->title;
            $data['uri'] = $this->child->uri;
            $data['thumbnail'] = $this->child->thumbnail;
        }

        if ($this->relationLoaded('parent')){
            $data['id'] = $this->parent->id;
            $data['title'] = $this->parent->title;
            $data['uri'] = $this->parent->uri;
            $data['thumbnail'] = $this->parent->thumbnail;
        }

        foreach($this->addToArray as $key){
            $data[$key] = $this->{$key};
        }
        return $data;
    }
}
