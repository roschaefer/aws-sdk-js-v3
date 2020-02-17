import {
  EKSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EKSClient";
import {
  UpdateNodegroupConfigRequest,
  UpdateNodegroupConfigResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdateNodegroupConfigCommand,
  serializeAws_restJson1_1UpdateNodegroupConfigCommand
} from "../protocols/Aws_restJson1_1";
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

export type UpdateNodegroupConfigCommandInput = UpdateNodegroupConfigRequest;
export type UpdateNodegroupConfigCommandOutput = UpdateNodegroupConfigResponse;

export class UpdateNodegroupConfigCommand extends $Command<
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNodegroupConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateNodegroupConfigCommandInput,
    UpdateNodegroupConfigCommandOutput
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
    input: UpdateNodegroupConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateNodegroupConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNodegroupConfigCommandOutput> {
    return deserializeAws_restJson1_1UpdateNodegroupConfigCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
