import Category from '@/model/Category';
import DbConnect from '@/utils/DbConnect';
import { redirect } from 'next/navigation';

const CategoryForm = () => {

    //Server Action
    const handleInsertForm = async (formData) => {
        "use server"

        DbConnect();

        const data = {
            catTitle: formData.get("categorytitle"),
            catDescription: formData.get("categorydescription")
        }

        const category = await Category.create(data);
        redirect("/admin/category");

    }
    return (
        <div className='flex flex-col '>
        <p className='  mb-2 p-4 text-xl font-bold font-sans text-center'>Add a new Category</p>
        <div className='flex flex-col p-8 flex-1  rounded-lg border'>
            <form action={handleInsertForm} method="post">
                <div className='mb-3'>
                    <label htmlFor="categorytitle">Category Title</label>
                    <input type="text" className='border border-black w-full p-3 mb-5' id="categorytitle" name="categorytitle" />
                </div>
                <div className='mb-3 '>
                    <label htmlFor="categorydescription">Category Description</label>
                    <textarea className='border border-black w-full p-3' id="categorydescription" name="categorydescription" />
                </div>
                <div className="mb-3 flex justify-center">
                    <input type="submit" value="Save" className='px-3 py-2 bg-black text-white rounded-lg ' />
                </div>
            </form>
        </div>
        </div>
    )
}

export default CategoryForm






// import Category from '@/model/Category';
// import DbConnect from '@/utils/DbConnect';
// import { Button, Input, Typography } from '@material-tailwind/react'

// const CategoryForm = () => {
//     const handleInsertForm = async () => {
//                 "use server"
        
//                 DbConnect();
        
//                 const data = {
//                     catTitle: formData.get("catTitle"),
//                     catDescription: formData.get("catDescription")
//                 }
        
//                 const category = await Category.create(data);
//                 redirect("/admin/category");
        
//             }
// return (
//   <div className='flex flex-1 flex-col border-2 border-gray p-3'>
//              <form action={handleInsertForm} method="post">
//   <Typography variant="h4" className='mb-5 font-medium text-lg p-2 border-b-2 border-gray ' color="blue-gray">
//     Add a new Category
//   </Typography>
//     <div className="mb-1 flex flex-col gap-4">
//       <Typography variant="h6" color="blue-gray" className="-mb-3">
//         Category Title
//       </Typography>
//       <Input
//         size="lg"
//         placeholder="Enter Category Title"
//         value={catTitle}
//         onChange={(e) => setCatTitle(e.target.value)}
//         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//         labelProps={{
//           className: "before:content-none after:content-none",
//         }}
//       />
      
//       <Typography variant="h6" color="blue-gray" className="-mb-3">
//         Category Description
//       </Typography>
//       <Input
//         size="lg"
//         placeholder="Enter Description"
//         value={catDescription}
//         onChange={(e) => setCatDescription(e.target.value)}
//         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//         labelProps={{
//           className: "before:content-none after:content-none",
//         }}
//       />
//     </div>
    
//     <Button  type="submit" className=" mt-2 text-white bg-black rounded-lg px-5 py-3 justify-between items-center " fullWidth>
//       Save
//     </Button>
//     </form>
// </div>
// )
// }

// export default CategoryForm

