'use client'
import packages from "../../data/packages"
import { useAppSelector } from "../../redux/hooks"

export default function WebPackages() {
  const wType = useAppSelector(state => state.wType.value)

  return (
    <div className="w-full px-5 flex justify-center">
      {packages && packages[0].categories.find(pkg => pkg.name === wType) && 
        <div className="flex items-center">
          
          {packages[0].categories.find(pkg => pkg.name === wType)?.packages.map((pkg, index) => (
            <div key={index} className="">
              {pkg.name}
            </div>
          ))}

        </div>
      }
    </div>
  )
}
