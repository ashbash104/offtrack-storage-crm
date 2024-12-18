import { Col, Form, Row } from "antd";
import { Edit, useForm } from '@refinedev/antd'

import { CompanyContactsTable } from "./contacts-table";
import { CompanyForm } from "./form";
import { UPDATE_COMPANY_MUTATION } from "./queries";
import { CustomAvatar } from "components";
import { getNameInitials } from "utilities";

export const CompanyEditPage = () => {
  const {saveButtonProps, formProps, formLoading, queryResult } = useForm({
    redirect: false, 
    meta: {
      gqlMutation: UPDATE_COMPANY_MUTATION
    }
  });
  const { avatarUrl, name } = queryResult?.data?.data || {}
  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} xl={12}>
        <Edit 
          isLoading={formLoading}
          saveButtonProps={saveButtonProps}
          breadcrumb={false}>
            <Form {...formProps} layout='vertical'>
              <CustomAvatar shape="square" src={avatarUrl} name=
              {getNameInitials(name)} style={{width: 96, height: 96, marginBottom:'24px'}}/>
            </Form>
        
        </Edit>
          
        </Col>
      </Row>
    </div>
  );
};