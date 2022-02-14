const Footer: React.FC = () => {
  return (
    <div>
      <div className="w-full bg-[#191d20] py-10 flex justify-center">
        <div className="mx-10">
          <h2 className="text-white font-bold my-4 lg:text-lg">Workspaces</h2>
          <ul className="">
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">React</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Vue</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Svelte</li>
          </ul>
        </div>
        <div className="mx-10">
          <h2 className="text-white font-bold my-4 lg:text-base">Product</h2>
          <ul className="">
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Docs</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Enterprise</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Pricing</li>
          </ul>
        </div>
        <div className="mx-10">
          <h2 className="text-white font-bold my-4 lg:text-base">Company</h2>
          <ul className="">
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Blog</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Privacy</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Terms of service</li>
          </ul>
        </div>
        <div className="mx-10">
          <h2 className="text-white font-bold my-4 lg:text-base">Company</h2>
          <ul className="">
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Blog</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Privacy</li>
            <li className="text-primary-p-color font-semibold text-sm lg:text-base my-1">Terms of service</li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#191d20] flex-row pb-10 pt-16">
        <div className="text-white text-xs font-normal text-center mb-2">上海薛来网络科技有限公司 © 2021 版权所有</div>
        <div className="text-white text-xs font-normal text-center">沪ICP备19039915号-1 </div>
      </div>
    </div>
  )
}

export default Footer
