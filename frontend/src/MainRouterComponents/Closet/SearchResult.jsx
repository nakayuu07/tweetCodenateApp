import React from 'react'
import SearchResultForm from './SearchResultForm'

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>画像</th>
              <th>メーカー</th>
              <th>商品名</th>
            </tr>
              {this.props.data.map((data) => {
                return(
                <SearchResultForm key={data.id}
                                  dataId={data.id}
                                  maker={data.maker}
                                  title={data.title}
                                  image={data.image.url}
                                  itemtype={data.itemtype}
                                  itemClass={data.itemClass}
                                  CloseSearchResult={this.props.CloseSearchResult}
                                  />
                )})}

          </tbody>
        </table>
        <button onClick={this.props.CloseSearchResult}>close</button>

      </div>
    )
  }
}

export default SearchResult
