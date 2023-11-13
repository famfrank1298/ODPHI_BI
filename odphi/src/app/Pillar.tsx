import Image from "next/image";

export default function Pillar() {
    return (
        <div className="flex w-full mb-[5rem]">
            <div className="container flex w-full mt-[3rem]">
                <div className="cta">
                <img className="pillar-img" src="/pillars/unity.JPG" alt="UNITY"/>
                <div className="text">
                    <h2 className="section-header font-semibold text-[20px]">UNITY</h2>
                    <p>A Brother of Omega Delta Phi is united with his Brothers. Unity fosters a sense of belonging, and collective strength, enabling individuals to achieve common goals more effectively while promoting a supportive environment.</p>
                </div>
                </div>
            </div>
            <div className="container flex w-full mt-[3rem]">
                <div className="cta">
                <img className="pillar-img" src="/pillars/honesty.JPG" alt="HONESTY"/>
                <div className="text">
                    <h2 className="section-header font-semibold text-[20px]">HONESTY</h2>
                    <p>A Knight of Omega Delta Phi is honest. Honesty establishes trust, transparency, and authenticity within relationships and interactions, creating a foundation for open communication and genuine connections among individuals.</p>
                </div>
                </div>
            </div>
            <div className="container flex w-full mt-[3rem]">
                <div className="cta">
                    <img className="pillar-img" src="/pillars/integrity.JPG" alt="INTEGRITY"/>
                    <div className="text">
                        <h2 className="section-header font-semibold text-[20px]">INTEGRITY</h2>
                        <p>Brothers of Omega Delta Phi upholds moral principles, consistency, and ethical behavior, ensuring that actions align with values contributing to a reputation of reliability and respect in personal and professional endeavors.</p>
                    </div>
                </div>
            </div>
            <div className="container flex w-full mt-[3rem]">
                <div className="cta">
                <img className="pillar-img" src="/pillars/leadership.JPG" alt="LEADERSHIP"/>
                <div className="text">
                    <h2 className="section-header font-semibold text-[20px]">LEADERSHIP</h2>
                    <p>A Brother of Omega Delta Phi leads by example. Leadership empowers individuals to guide and inspire others towards positive change and growth, fostering innovation, direction, and the development of strong teams and communities.</p>
                </div>
                </div>
            </div>
     </div>
     );
}