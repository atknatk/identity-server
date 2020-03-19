import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ClaimService } from './claim/claim.service';
import { ClaimModule } from './claim/claim.module';
import { ResourceModule } from './resource/resource.module';
import { OrganizationModule } from './organization/organization.module';
import { PolicyModule } from './policy/policy.module';
import { ClientModule } from './client/client.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    RoleModule,
    ClaimModule,
    ResourceModule,
    OrganizationModule,
    PolicyModule,
    ClientModule,
    PermissionModule
  ],
  controllers: [AppController],
  providers: [AppService, ClaimService],
})
export class AppModule {}
