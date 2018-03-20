require 'mini_magick'

WearItem.create!(
  maker: 'ユニクロ',
  title: 'ユニクロ帽子',
  itemtype: 'hat',
  itemClass: 'cap',
  image: MiniMagick::Image.open('/Users/yoshi/Desktop/hat.png')
)



WearItem.create!(
  maker: 'ユニクロ',
  title: 'ユニクロ上着',
  itemtype: 'jacket-outerwear',
  itemClass: 'tailored-jacket',
  image: MiniMagick::Image.open('/Users/yoshi/Desktop/jacket-outerwear.png')
)


WearItem.create!(
  maker: 'ユニクロ',
  title: 'ユニクロパンツ',
  itemtype: 'pants',
  itemClass: 'denim-pants',
  image: MiniMagick::Image.open('/Users/yoshi/Desktop/pants.png')
)

WearItem.create!(
  maker: 'ユニクロ',
  title: 'ユニクロ靴',
  itemtype: 'shoes',
  itemClass: 'sneakers',
  image: MiniMagick::Image.open('/Users/yoshi/Desktop/shoes.png')
)
