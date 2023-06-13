import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

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

          <TabsContent value="fe" className="mt-0 grid grid-cols-12 gap-2">

            {"aaaaa".split('').map((item) => (
              <Card className="col-span-12 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Personal Website</CardTitle>
                  <CardDescription>Used for explain about myself</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <AspectRatio ratio={16 / 9} className="bg-black dark:bg-white">
                      <div></div>
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            ))}

          </TabsContent>

          <TabsContent value="be" className="mt-0 grid grid-cols-12 gap-2">

            {"aaaaa".split('').map((item) => (
              <Card className="col-span-12 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Personal Website</CardTitle>
                  <CardDescription>Used for explain about myself</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <AspectRatio ratio={16 / 9} className="bg-black dark:bg-white">
                      <div></div>
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            ))}

          </TabsContent>

          <TabsContent value="mobile" className="mt-0 grid grid-cols-12 gap-2">

            {"aaaaa".split('').map((item) => (
              <Card className="col-span-12 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Personal Website</CardTitle>
                  <CardDescription>Used for explain about myself</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <AspectRatio ratio={16 / 9} className="bg-black dark:bg-white">
                      <div></div>
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            ))}

          </TabsContent>

        </Tabs>
      </div>

    </section>
  )
}
