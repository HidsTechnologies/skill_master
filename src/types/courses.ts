export interface Course{
    description:string,
    id:string,
    title:string,
    link:string,
    image:string,
    syllabus:[],
    learningObjective:string,
    assessment:Assessment,
    summary:Summary[],
    certification:string,
    trainerProfile:TrainerProfile
}

export interface Summary{
    title:string,
    value:string
}

export interface Assessment{
    title:string,
    points:[]
}

export interface TrainerProfile{
    title:string,
    points:[]
}