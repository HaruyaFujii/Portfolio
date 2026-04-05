import Image from "next/image";

const Profile = () => {
    return (
        <section className="bg-gray-50 py-16" id="profile">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-gray-900">
                    Profile
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="relative w-[300px] h-[300px] rounded-full border-4 border-gray-300 overflow-hidden">
                            <Image
                                src="/images/profile.JPG"
                                alt="プロフィール写真"
                                fill
                                sizes="300px"
                                loading="eager"
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl font-bold text-gray-900 mb-3">
                            藤井 陽也 | Haruya Fujii
                        </h1>
                        <p className="text-2xl text-gray-600 mb-4">
                            大阪公立大学大学院 情報学研究科
                        </p>
                        <p className="text-lg text-gray-700">
                            個人開発およびインターン中に不便に思ったことや大変だと思ったことを共通の課題に落とし込み、ソリューションとなるようなプロダクトを作ることにやりがいを感じています。将来はより大きな課題に挑戦し、社会貢献できたらなと考えています。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;