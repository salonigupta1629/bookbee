import { NextResponse } from 'next/server';
import DbConnect from '@/utils/DbConnect';
import BookModel from '@/model/BookModel';


export async function DELETE(req, { params }) {
  const { bookId } = params;  // Access the studentId from params

  try {
    await DbConnect();
    const deleted = await BookModel.findByIdAndDelete(bookId);

    return NextResponse.json({
      message: `Book with ID ${bookId} deleted successfully.`,
    });
  } catch (error) {
    console.error('Error deleting book:', error);
    return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 });
  }
}



export async function GET(req, { params }) {
const {bookId} = params; 

try{
await DbConnect();
  let value = await BookModel.findOne({_id: bookId});

  if(!value){
    return NextResponse.json({error: "Book not found"},{ status: 404 });
  }

  return NextResponse.json({value}, {status:200});


}catch(error){
  return NextResponse.json({error: "Failed to fetch book details"}, { status: 500});
}
}

























































































































  