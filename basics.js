const arr=[2,3,4,5,6,8,10]
const res=arr.map((item)=>{
    return item*2
})
console.log(res)

const doubledNum=[];
for(let i=0;i<arr.length;i++){
    const doubled=arr[i]*2;
    doubledNum.push(doubled)
}
console.log(doubledNum)


const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
  ];

  const usersId=[];
  const usersName=[];
  for(let j=0;j<users.length;j++){
      let Ids=users[j].id
      let names=users[j].name
      usersId.push(Ids)
      usersName.push(names)

  }

  console.log(usersId)
  console.log(usersName)

  const Idss=users.map(user=>user.id)
  const Names=users.map(user=>user.name)
  console.log(Idss)
  console.log(Names)

  //Increment number by index
  const numbers=[1,2,3,4,5];
  const incrementedNumer=numbers.map((num,index)=>{
    return(
        num+index*2
    )
  })
  console.log(incrementedNumer)

  const increase=numbers.map((item,index)=>{
    return {
        key:index,value:item*2
    }
  })

  console.log(increase)


  //forEach
   const numList=[10,20,30,40];
   const dobled=[];
   console.time('forEach');
   numList.forEach((item,index)=>{
    return(
        dobled.push(item*2)
    )
   })
  console.log(dobled)
   console.timeEnd('forEach');

   console.time('map');

const doubledNumbersMap = numbers.map((num) => num * 2);
console.log(doubledNumbersMap)
console.timeEnd('map');




const gotFrequency=(arr)=>{
    let count={};
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        console.log(
        count[num]?count[num]+1:1
        )
       count[num]= count[num]?count[num]+1:1
    }
    return count;
}

console.log(gotFrequency([1,2,3,1,1,3,4,5,3,3]))