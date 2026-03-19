"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/container";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const formatNumber = (value: number) => String(value).padStart(2, "0");

const getTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

export const PromotionBanner = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    date.setHours(date.getHours() + 12);
    date.setMinutes(date.getMinutes() + 45);
    date.setSeconds(date.getSeconds() + 5);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="pb-16">
      <Container>
        <div className="grid grid-cols-2 overflow-hidden bg-[#FEE7B2]">
          <div className="relative h-105">
            <Image
              src="/07.png"
              alt="Promotion"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex h-105 items-center bg-[#F3D999] px-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-blue-600">
                Promotion
              </p>

              <h2 className="mb-4 text-[40px] font-medium leading-tight text-black">
                Hurry up! 40% OFF
              </h2>

              <p className="mb-8 text-lg text-black">
                Thousands of high tech are waiting for you
              </p>

              <p className="mb-4 text-sm text-black">Offer expires in:</p>

              <div className="mb-8 flex gap-4">
                <div className="text-center">
                  <div className="flex h-15 w-15 items-center justify-center bg-white text-[28px] font-medium text-black">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <span className="mt-2 block text-xs text-black">Days</span>
                </div>

                <div className="text-center">
                  <div className="flex h-15 w-15 items-center justify-center bg-white text-[28px] font-medium text-black">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <span className="mt-2 block text-xs text-black">Hours</span>
                </div>

                <div className="text-center">
                  <div className="flex h-15 w-15 items-center justify-center bg-white text-[28px] font-medium text-black">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <span className="mt-2 block text-xs text-black">
                    Minutes
                  </span>
                </div>

                <div className="text-center">
                  <div className="flex h-15 w-15 items-center justify-center bg-white text-[28px] font-medium text-black">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <span className="mt-2 block text-xs text-black">
                    Seconds
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg bg-black px-8 py-3 text-sm font-medium text-white"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};