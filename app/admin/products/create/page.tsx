// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// const createProductAction = async (formData: FormData) => {
//   'use server';
//   const name = formData.get('name') as string;
//   console.log(name);
// };
//   const name = faker.commerce.productName();
//   const company = faker.company.name();
//   const description = faker.lorem.paragraph({ min: 10, max: 12 });

// function CreateProductPage() {
//   return (
//     <section>
//       <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
//       <div className='border p-8 rounded-md'>
//         <form action={createProductAction}>
//           <div className='mb-2'>
//             <Label htmlFor='name'>Product Name</Label>
//              return <Input id='name' name='name' type='text' defaultValue={name} />;
//           </div>
//           <Button type='submit' size='lg'>
//             Submit
//           </Button>
//         </form>
//       </div>
//     </section>
//   );
// }
// export default CreateProductPage;

import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { createProductAction } from '@/utils/actions';
import { faker } from '@faker-js/faker';

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  // const imageUrl = faker.image.url({
  //   width: 640,
  //   height: 480,
  // })
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
          {/* <FormInput
              type='url'
              name='imageUrl'
              label='imageUrl'
              defaultValue={imageUrl}
            />
            <img src={imageUrl} className='rounded-sm'></img>             */}
            <FormInput
              type='text'
              name='name'
              label='product name'
              defaultValue={name}
            />
            <FormInput
              type='text'
              name='company'
              label='company'
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput name='featured' label='featured' />
          </div>
          <SubmitButton text='create product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;


