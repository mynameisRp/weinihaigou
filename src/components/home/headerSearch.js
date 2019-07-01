import React from "react"
import { SearchBar} from 'antd-mobile';
import "./headerSearch.css"


class HeaderSearch extends React.Component{
constructor(){
    super()
    this.state = {
        value: "美食"
    }
}

    
    render(){
        return (
            <div className="search-wrap">
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                />
            </div>
        )  
    }

}










export default HeaderSearch