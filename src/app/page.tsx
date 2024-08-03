import { ButtonIcon } from "@/components/ButtonIcon";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <div className="w-screen h-40 space-y-4 flex flex-col items-center mt-20">
        <h1>Wellcome</h1>
        <p>Select o que vc quiser</p>
      </div>
      <div className="grid grid-cols-3 gap-14 px-4">
        <ButtonIcon
          icon="breath_1"
          title="teste name muito grande"
          route="http://github.com/heitor3"
        />
        <ButtonIcon icon="breath_2" title="teste name muito grande" route="/" />
        <ButtonIcon icon="breath_3" title="teste name muito grande" route="/" />
        <ButtonIcon icon="breath_4" title="teste name muito grande" route="/" />
        <ButtonIcon icon="breath_5" title="teste name muito grande" route="/" />
        <ButtonIcon icon="breath_6" title="teste name muito grande" route="/" />
      </div>
    </main>
  );
}
