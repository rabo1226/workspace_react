import React from 'react'

const Map_2 = () => {
  const item_list = [
    {itemNum : 1, itemName : '라면', itemPrice : 1000},
    {itemNum : 2, itemName : '생수', itemPrice : 500},
    {itemNum : 3, itemName : '과자', itemPrice : 1500},
  ];

  return (
    <>
      <h2>Map을 이용한 반복 화면 그리기</h2>
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>상품번호</td>
            <td>상품명</td>
            <td>상품가격</td>
          </tr>
        </thead>
        <tbody>
          {
            item_list.map((item, i) => {
              return(
                <tr key={item.itemNum}> 
                  <td>{item_list.length - i}</td>
                  <td>{item.itemNum}</td>
                  <td>{item.itemName}</td>
                  <td>{item.itemPrice}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Map_2