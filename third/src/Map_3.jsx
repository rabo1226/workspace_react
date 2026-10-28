import React from 'react'

const Map_3 = () => {
  const data = [
    {itemNum : 1, itemName : '청바지'},
    {itemNum : 2, itemName : '후드티'},
    {itemNum : 3, itemName : '바람막이'},
    {itemNum : 4, itemName : '신발'},
    {itemNum : 5, itemName : '모자'}
  ];
  //셀렉트 태그 만들어랑~
  return (
    <>
      <h3>Map3</h3>
      <select>
        <option>상품선택</option>
        {data.map((item, i) => {
          return(
            <option key={i} value={item.itemNum}>{item.itemName}</option>
          )
        })}
      </select>
    </>
  )
}

export default Map_3