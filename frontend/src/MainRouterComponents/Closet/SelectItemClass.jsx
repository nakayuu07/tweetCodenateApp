import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SelectItemClass extends React.Component{
  render() {
    if(this.props.itemType === 'hat'){
      return(
        <div>
          <SelectField
            floatingLabelText="帽子のタイプを入力してください"
            value={this.props.itemClass}
            onChange={this.props.handleItemClassChange }
          >
            <MenuItem value={"cap"} primaryText="キャップ" />
            <MenuItem value={"hat"} primaryText="ハット" />
            <MenuItem value={"pants"} primaryText="ニットキャップ" />
            <MenuItem value={"beret"} primaryText="ベレー帽" />
            <MenuItem value={"casket"} primaryText="キャスケット" />
          </SelectField>
        </div>
      )
    }else if(this.props.itemType === 'tops'){
      return(
        <div>
          <SelectField
            floatingLabelText="トップスのタイプを入力してください"
            value={this.props.itemClass}
            onChange={this.props.handleItemClassChange }
          >
            <MenuItem value={"T-shirt/cut"} primaryText="Tシャツ/カットソー" />
            <MenuItem value={"Shirts/blouses"} primaryText="シャツ/ブラウス" />
            <MenuItem value={"PoloShirt"} primaryText="ポロシャツ" />
            <MenuItem value={"Knit/sweater"} primaryText="ニット/セーター" />
            <MenuItem value={"Parker"} primaryText="パーカー" />
            <MenuItem value={"tailored-jacket"} primaryText="テーラージャケット" />
            <MenuItem value={"No-color-jacket"} primaryText="ノーカラージャケット" />
            <MenuItem value={"Denim-Jacket"} primaryText="デニムジャケット" />
          </SelectField>
        </div>
      )
    }else if(this.props.itemType === 'pants'){
      return(
        <div>
          <SelectField
            floatingLabelText="パンツのタイプを入力してください"
            value={this.props.itemClass}
            onChange={this.props.handleItemClassChange }
          >
            <MenuItem value={"Denim-pants"} primaryText="デニムパンツ" />
            <MenuItem value={"Cargo-pants"} primaryText="カーゴパンツ" />
            <MenuItem value={"Chino-pants"} primaryText="チノパンツ" />
            <MenuItem value={"Pants"} primaryText="パンツ" />
            <MenuItem value={"Slacks"} primaryText="スラックス" />
          </SelectField>
        </div>
      )
    }else if(this.props.itemType === 'shoes'){
      return(
        <div>
          <SelectField
            floatingLabelText="靴のタイプを入力してください"
            value={this.props.itemClass}
            onChange={this.props.handleItemClassChange }
          >
            <MenuItem value={"Sneakers"} primaryText="スニーカー" />
            <MenuItem value={"Slip"} primaryText="スリッポン" />
            <MenuItem value={"Sandals"} primaryText="サンダル" />
            <MenuItem value={"Boots"} primaryText="ブーツ" />
          </SelectField>
        </div>
      )
    }else{
      return(
        <div>
        </div>
      )
    }
  }
}

export default SelectItemClass
