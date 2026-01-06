export default function ProjectCards({ title, gallery, description, links, tags }) {
  return (
    <div className='p-4 h-[23rem] shadow-2xl rounded-lg hover:shadow-lg transition-shadow cursor-pointer'>
        <div>
            <h3 className='text-2xl font-bold'>{title}</h3>
            {
                gallery.length > 0 && (
                    <img src={gallery[0].image[0]} alt={title} className='w-full h-40 object-cover object-center my-2 rounded-md' />
                )
            }
            {/* <img src={images[0]} alt={title} className='w-full h-40 object-cover object-center my-2 rounded-md' /> */}
            <p className='text-md mb-2'>{description.slice(0, 140)}...</p>
            <div className='flex flex-wrap gap-2'>
                {tags.slice(0, 5).map((tag, index) => (
                    <span key={index} className='bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm'>{tag}</span>
                ))}
                {tags.length > 5 && (
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
                    +{tags.length - 5} more
                    </span>
                )}
            </div>
            <div className='mt-4 flex gap-4'>
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}
