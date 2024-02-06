

export default function Login() {
    return (
        <div className="w-full h-full flex justify-center text-center">
            <div className=" w-96 h-[400px] flex flex-col border-2  rounded-lg border-gray-600  p-8 gap-4 lg:w-[400px] md:w-[350px]">
                <div className="text-xl font-serif justify-center text-center">
                    Sign In
                </div>
                <div>
                    <input type="text" className=" border-2 w-72 p-2 lg:w-[300px] md:w-[250px] rounded-md" placeholder="Email" />
                </div>
                <div>
                    <input type="text" className=" border-2 w-72 p-2 lg:w-[300px] md:w-[250px] rounded-md" placeholder="Password" />
                </div>

                <div className=" flex pl-6 pr-6 justify-between">
                    <div className=" font-mono">
                        Create a new account?
                    </div>
                    <div className=" text-blue-800 font-serif"  >
                        Sign Up
                    </div>
                </div>

                <div className="flex justify-start font-mono pl-6">
                    <div>
                        Forget Password?
                    </div>
                </div>

                <div>
                    <button className=" w-[100px] bg-blue-900 p-2 text-white border-1 rounded-md" >
                        Login
                    </button>
                </div>
                
            </div>


        </div>
    )
}
