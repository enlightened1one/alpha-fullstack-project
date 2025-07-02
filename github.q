git add .
git commit -m "Your message"
//git push
git push -u origin main











.env:
DATABASE_URL="postgresql://schoolManDB_owner:npg_O6w8FJTijYvU@ep-flat-hat-a53xskcb-pooler.us-east-2.aws.neon.tech/schoolManDB?sslmode=require&channel_binding=require"
# uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED="postgresql://schoolManDB_owner:npg_O6w8FJTijYvU@ep-flat-hat-a53xskcb.us-east-2.aws.neon.tech/schoolManDB?sslmode=require&channel_binding=require"

schema.prisma:
// prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url  	    = env("DATABASE_URL")
  // uncomment next line if you use Prisma <5.10
  // directUrl = env("DATABASE_URL_UNPOOLED")
}







constructor(@Inject(JOB_REF) jobRef: Job) {
  console.log(jobRef);
}


import { Processor, Process, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('audio')
export class AudioConsumer {
  @OnWorkerEvent('active')
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  // ...
}














// prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url  	    = env("DATABASE_URL")
  // uncomment next line if you use Prisma <5.10
  // directUrl = env("DATABASE_URL_UNPOOLED")
}















DATABASE_URL="postgresql://neondb_owner:npg_T0k6pbIVEDiy@ep-summer-sound-a5sq5bhw-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
# uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED="postgresql://neondb_owner:npg_T0k6pbIVEDiy@ep-summer-sound-a5sq5bhw.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

    update(id: number , updateUserDto: Prisma.UsersUpdateInput) {
    this.users = this.users.map(user => {
      if(user.id === id){
        // Extract string values if Prisma field update operations are used
        const updatedUser = { ...user };
        for (const key of Object.keys(updateUserDto)) {
          const value = (updateUserDto as any)[key];
          if (typeof value === 'object' && value !== null && 'set' in value) {
            updatedUser[key] = value.set;
          } else {
            updatedUser[key] = value;
          }
        }
        return updatedUser;
      }
      return user;
    });