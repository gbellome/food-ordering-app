export default function SectionHeader({ title, subTitle }) {
  return (
    <div className="mb-4 text-center">
      <h3 className="font-semibold leading-4 text-gray-500 uppercase">
        {subTitle}
      </h3>
      <h2 className="text-4xl italic font-bold text-primary">{title}</h2>
    </div>
  )
}
