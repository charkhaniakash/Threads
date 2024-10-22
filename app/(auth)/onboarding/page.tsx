import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs/server"


async function Page(){

    const user = await currentUser()

    const userInfo = {}

    const userData = {
        // id: user?.id,
        // objectId: userInfo?._id,
        // username: userInfo ? userInfo?.username : user.username,
        // name: userInfo ? userInfo?.name : user.firstName ?? "",
        // bio: userInfo ? userInfo?.bio : "",
        // image: userInfo ? userInfo?.image : user.imageUrl,
      };
    


    return (
        <main className="mx-auto flex flex-col justify-start px-10 py-20 max-w-3xl">
            <h1 className="head-text">Onboarding </h1>
            <p className="mt-3 text-base-regular text-light-2">Complete yout profile now to use Threads</p>

            <section className="mt-10">
                <AccountProfile/>
            </section>
        </main>
    )
}

export default Page