import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb'
import { CreateView } from '@/components/refine-ui/views/create-view'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { Separator } from '@/components/ui/separator'
import { useBack } from '@refinedev/core'
import { zodResolver } from '@hookform/resolvers/zod'
import { classSchema } from '@/lib/schema'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import * as z from "zod"
import { Label } from '@radix-ui/react-menubar'
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select'
import { teachers, subjects } from '@/constants'
import { Textarea } from '@/components/ui/textarea'
const ClassesCreate = () => {
    const back = useBack();

    const form = useForm({
        resolver: zodResolver(classSchema),
        refineCoreProps: {
            resource: "classes",
            action: "create",
        },
        defaultValues: {
            status: "active",
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
        control,
    } = form;

    const onSubmit = (values: z.infer<typeof classSchema>) => {
        try {

        }
        catch (e) {
            console.log('Error creating new classes', e)
        }
    }


    return (
        <CreateView className='class-view'>
            <Breadcrumb />
            <h1 className="page-title">
                Create a class
            </h1>

            <div className="intro-row">
                <p>
                    Provide the required fields:
                </p>
                <Button onClick={back}>
                    Back
                </Button>
            </div>

            <Separator />

            <div className="my-4 flex items-center">
                <Card className='class-form-card px-5'>
                    <CardHeader className='relative z-10'>
                        <CardTitle className='text-2xl pb-0 font-bold'>
                            Fill out the form
                        </CardTitle>
                    </CardHeader>

                    <Separator />

                    <CardContent className='mt-7' >
                        <Form {...form}>
                            <form onSubmit={handleSubmit(onSubmit)}
                                className='space-y-8'>
                                <div className="space-y-3">
                                    <Label>
                                        Banner Image
                                        <span className='text-orange-600'>
                                            *
                                        </span>
                                    </Label>
                                    <p>
                                        Upload image widget
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormField
                                        control={control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Name of your class
                                                    <span className='text-orange-600'>
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Please do state the name of your class..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}>
                                    </FormField>

                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormField
                                        control={control}
                                        name="subjectId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Subject
                                                    <span className='text-orange-600'>
                                                        *
                                                    </span>
                                                </FormLabel>

                                                <Select
                                                    onValueChange={(value) => field.onChange(Number(value))}
                                                    value={field?.value?.toString()}>
                                                    <FormControl>
                                                        <SelectTrigger className='w-full'>
                                                            <SelectValue placeholder='Select a subject...' />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            subjects.map((subject) => (
                                                                <SelectItem value={subject.id.toString()} key={subject.id}>
                                                                    {subject.name}
                                                                    ({subject.code})
                                                                </SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>

                                                <FormMessage />
                                            </FormItem>
                                        )}>
                                    </FormField>
                                    <FormField
                                        control={control}
                                        name="teacherId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Teacher
                                                    <span className='text-orange-600'>
                                                        *
                                                    </span>
                                                </FormLabel>

                                                <Select
                                                    onValueChange={(value) => field.onChange(Number(value))}
                                                    value={field?.value?.toString()}>
                                                    <FormControl>
                                                        <SelectTrigger className='w-full'>
                                                            <SelectValue placeholder='Choose the best teacher for your learning...' />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            teachers.map((teacher) => (
                                                                <SelectItem value={teacher.id.toString()} key={teacher.id}>
                                                                    {teacher.name}
                                                                </SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>

                                                <FormMessage />
                                            </FormItem>
                                        )}>
                                    </FormField>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormField
                                        control={control}
                                        name="capacity"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Capacity</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="30"
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            field.onChange(value ? Number(value) : undefined);
                                                        }}
                                                        value={(field.value as unknown as number | undefined) ?? ""}
                                                        name={field.name}
                                                        ref={field.ref}
                                                        onBlur={field.onBlur}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Status <span className="text-orange-600">*</span>
                                                </FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    value={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select status" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="active">Active</SelectItem>
                                                        <SelectItem value="inactive">Inactive</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Brief description about the class"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Separator />
                                <Button type="submit">
                                    Submit
                                </Button>
                            </form>
                        </Form>
                    </CardContent>


                </Card>
            </div>


        </CreateView>
    )
}

export default ClassesCreate