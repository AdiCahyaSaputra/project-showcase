import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectSection from "@/components/section/ProjectSection"


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

      <div className="flex max-w-[980px] flex-col items-start gap-2">

        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Introducing a Collection of My Impressive Projects
        </h1>

        <p className="max-w-[700px] text-lg text-muted-foreground">
          Welcome to my portfolio, where I proudly present a compilation of the <b>remarkable</b> projects I have crafted.
        </p>

      </div>

      <div>
        <Tabs defaultValue="fe">

          <TabsList className="mb-2">
            <TabsTrigger value="fe">Frontend</TabsTrigger>
            <TabsTrigger value="be">Backend</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>

          <TabsContent value="fe" className="mt-0">
            <ProjectSection type="fe" />
          </TabsContent>

          <TabsContent value="be" className="mt-0 grid grid-cols-12 gap-2">
            <ProjectSection type="be" />
          </TabsContent>

          <TabsContent value="mobile" className="mt-0 grid grid-cols-12 gap-2">
            <ProjectSection type="mobile" />
          </TabsContent>

        </Tabs>
      </div>

    </section>
  )
}
