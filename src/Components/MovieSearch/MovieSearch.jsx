import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import {
    SearchBox,
    RefinementListFilter,
    Hits,
    HitsStats,
    SearchkitComponent,
    SelectedFilters,
    MenuFilter,
    HierarchicalMenuFilter,
    Pagination,
    ResetFilters,
    SearchkitManager,
    SearchkitProvider
    } from "searchkit";
    
class MovieSearch extends Component {
     
    constructor(props){
        super(props);
        this.searchkit = new SearchkitManager(props.elasticUrl,  {
            basicAuth:"elastic:bDz!#$7tb&btBcooHLT-"
          });
    }

    render(){
        return(
            <SearchkitProvider searchkit={this.searchkit}>
                <div>
                    <SearchBox   searchOnChange={true}
                                 queryOptions={{analyzer:"standard"}}
                                 queryFields={["title^1"]} />
                    <Hits hitsPerPage={50} highlightFields={["title"]} sourceFilter={["title", "description", "cover", "userRating"]}
                                        mod="sk-hits-grid" listComponent={MovieList}/>
                </div>
            </SearchkitProvider>
        );
    }
}

export default MovieSearch;