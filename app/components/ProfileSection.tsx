interface Props {
  id: string
  title: string
  titleClass: string
  textClass: string
  backgroundClass: string
  children: any
}

export default function ProfileSection({
  id,
  title,
  titleClass,
  textClass,
  backgroundClass,
  children,
}: Props) {
  return (
    <div id={id} className={`${backgroundClass}`}>
      <div className="flex justify-center">
        <div className="w-full xl:w-[1280px] py-10 px-5">
          <div className={`text-3xl font-bold ${titleClass}`}>{title}</div>
          <div className={`px-2 py-5 ${textClass}`}>{children}</div>
        </div>
      </div>
    </div>
  )
}
