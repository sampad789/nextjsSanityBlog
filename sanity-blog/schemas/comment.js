export default{
  name :"comment",
  type:"document",
  title:"Comment",
  fields:[
    {
      name:"name",
      type:"string",
    },
    {
      title:"Approved",
      name:"approved",
      type:"boolean",
      description:"Comments won't show on the site without the approval "
    },
    {
      name:"email",
      type:"string",
    },
    {
      name:"comment",
      type:"string",
    },
    {
      name:"post",
      type:"reference",
      to :[{type:"post"}]
    }
  ],

};