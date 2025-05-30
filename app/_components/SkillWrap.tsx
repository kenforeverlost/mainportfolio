interface Props {
  skillName: string
  type: string
  icon: React.ReactNode
}

const SkillWrap = ({ skillName, type, icon }: Props) => {
  return (
    <div className="flex flex-col gap-1 items-center py-2">
      {icon}
      <div className="text-center">
        <div className="font-bold text-primary">{skillName}</div>
        <div className="text-primary italic text-xs">{type}</div>
      </div>
    </div>
  )
}

export default SkillWrap
