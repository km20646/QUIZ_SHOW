import Image from "next/image";
import { CheckCircle } from "@/ui/icons/CheckCircle";
import { importantToKnow } from "@/ui/content/content";
import { Button } from "./Button";

interface IntroProps {
  onGetStartedClick: () => void;
}

export const Intro = ({ onGetStartedClick }: IntroProps) => {
  return (
    <div className="px-5 py-7 flex-1 w-full lg:max-w-4xl mx-auto flex flex-col overflow-hidden">
  
      <div className="w-full flex flex-col flex-1 items-center z-10">
        <h1 className="text-brand-cerulean-blue font-bold text-[32px] sm:text-4xl">
        워크샵 퀴즈쇼
        </h1>

        <h3 className="text-black font-bold text-xl mt-[30.55px] sm:text-2xl">
          유의사항
        </h3>

        <div className="flex flex-col items-start mt-5 sm:mt-5 space-y-4">
          {importantToKnow.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle />
              <p className="text-sm text-brand-storm-dust font-normal sm:text-lg">
                {item}
              </p>
            </div>
          ))}
          <div className="text-sm text-brand-storm-dust font-normal sm:text-lg">
            <div className="table_layout">
                <table className="">
                    <caption className="text-lg text-black">아이템 구성 표</caption>
                    <thead>
                        <tr>
                            <th className="name">아이템</th>
                            <th className="amount">개수</th>
                            <th className="percent">확률</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td className="name">[23.11][SSS] TOP 1 상자 + GM&apos;s VIP Gift</td>
                                <td className="amount">1</td>
                                <td className="percent">-</td>
                            </tr>
                            <tr>
                                <td className="name">[23.11][SS] TOP 2 상자 + GM&apos;s Special Gift</td>
                                <td className="amount">1</td>
                                <td className="percent">-</td>
                            </tr>
                            <tr>
                                <td className="name">[23.11][S] TOP 3 상자</td>
                                <td className="amount">1</td>
                                <td className="percent">-</td>
                            </tr>
                            <tr>
                                <td className="name">[23.11][스페셜] 행운의 알쏭달쏭 럭키 프리미엄 상자(4~10등)</td>
                                <td className="amount">1</td>
                                <td className="percent">-</td>
                            </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>

      <Button
        className="w-full z-10 "
        block
        size={"small"}
        onClick={onGetStartedClick}
      >{`시작하기`}</Button>
    </div>
  );
};
