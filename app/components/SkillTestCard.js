// components/SkillTestCard.js
import Image from 'next/image';
export default function SkillTestCard() {
  return (
      <div className="border shadow h-auto w-full flex p-4">
        <Image src="/images/html_logo.png" alt="HTML" width={50} height={100} className="mx-1" />
        <div className='flex flex-col px-2'>
          <h2 className="font-bold">Hyper Text Markup Language</h2>
          <p className='text-sm font-semibold text-gray-600'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded" onClick={handleOpenModal}>Update</button>
      </div>
  );
}
