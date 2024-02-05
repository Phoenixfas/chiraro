'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { changeWType } from "../../redux/slices/wTypeSlice"

export default function WTypeChoose() {
    const dispatch = useAppDispatch()
    const wType = useAppSelector(state => state.wType.value)
  return (
    <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-14">Website Pricing</h1>
        <div className="flex bg-[rgba(255,255,255,.05)] border border-[#192655] rounded-lg p-2">
            <button onClick={() => dispatch(changeWType('static'))} className={`duration-300 px-6 py-3 rounded-lg text-lg font-bold ${wType === 'static' ? 'text-[#080C1B] bg-[#01BAEF]' : ''}`}>Static Web Presence</button>
            <button onClick={() => dispatch(changeWType('dynamic'))} className={`duration-300 px-6 py-3 rounded-lg text-lg font-bold ${wType === 'dynamic' ? 'text-[#080C1B] bg-[#01BAEF]' : ''}`}>Dynamic Web Applications</button>
        </div>
    </div>
  )
}
