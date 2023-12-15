import { FIELD } from "@daohaus/moloch-v3-legos";
import { CustomFormLego } from "./legoConfig";
import { APP_FIELD } from "./fields";
import { APP_TX } from "./tx";

const PROPOSAL_SETTINGS_FIELDS = [FIELD.PROPOSAL_EXPIRY, FIELD.PROP_OFFERING];

export const APP_FORM: Record<string, CustomFormLego> = {
  TEST_FORM: {
    id: "TEST_FORM",
    title: "超級信號表格",
    subtitle: "超級信號提案",
    description: "利用DAO提案上鏈作為簽屬",
    requiredFields: { title: true, description: true, testField: true },
    log: true,
    tx: APP_TX.TEST_TX,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      APP_FIELD.TEST_FIELD,
      ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
};
