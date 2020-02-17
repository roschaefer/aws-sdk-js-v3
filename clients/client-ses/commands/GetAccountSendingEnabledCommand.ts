import {
  SESClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESClient";
import { GetAccountSendingEnabledResponse } from "../models/index";
import {
  deserializeAws_queryGetAccountSendingEnabledCommand,
  serializeAws_queryGetAccountSendingEnabledCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type GetAccountSendingEnabledCommandInput = {};
export type GetAccountSendingEnabledCommandOutput = GetAccountSendingEnabledResponse;

export class GetAccountSendingEnabledCommand extends $Command<
  GetAccountSendingEnabledCommandInput,
  GetAccountSendingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccountSendingEnabledCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAccountSendingEnabledCommandInput,
    GetAccountSendingEnabledCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAccountSendingEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetAccountSendingEnabledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccountSendingEnabledCommandOutput> {
    return deserializeAws_queryGetAccountSendingEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
