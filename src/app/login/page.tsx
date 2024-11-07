'use client'

import SocialButton from '@/components/UserContainer/SocialButton'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col gap-[40px]">
      <Image src="/image/logo.svg" alt="구해줘요 동물의 숲" width="358" height="201" />
      <Image
        src="/image/earth.svg"
        alt=""
        width="233"
        height="233"
        className="shadow-earth rounded-[50%]"
      />
      <div className="w-[258px] flex justify-center items-center gap-[22px]">
        <hr className="w-[74px] text-brown" />
        <span className="font-gothic-m text-brown text-[13px]">간편 로그인</span>
        <hr className="w-[74px] text-brown" />
      </div>
      <div className="w-[258px] flex justify-between">
        <SocialButton type="google" onClick={() => alert('google')} />
        <SocialButton type="kakao" onClick={() => alert('kakao')} />
        <SocialButton type="naver" onClick={() => alert('naver')} />
      </div>
    </main>
  )
}
