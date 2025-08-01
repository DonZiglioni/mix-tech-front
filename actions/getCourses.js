import { db } from "../lib/db"

const getCourses = async () => {
    try {
        const courses = await db.course.findMany({
            where: {
                isPublished: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return courses;
    } catch (error) {
        console.log("[GET_COURSES]", error)
        return []
    }
}

export default getCourses