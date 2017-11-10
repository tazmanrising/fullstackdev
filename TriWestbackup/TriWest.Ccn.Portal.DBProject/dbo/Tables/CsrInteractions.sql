CREATE TABLE [dbo].[CsrInteractions] (
    [Id]      INT            IDENTITY (1000000000, 1) NOT NULL,
    [TimerStart]     DATETIME       CONSTRAINT [DF_CsrInteraction_TimerStart] DEFAULT (getutcdate()) NULL,
    [TimerEnd]       DATETIME       NULL,
    [SessionNote]    NVARCHAR (4000) NULL,
    [ContactTypeId]  INT            NULL,
    [SubCategoryId]  INT            NULL,
    [FirstName]      VARCHAR (50)   NULL,
    [LastName]       VARCHAR (50)   NULL,
    [Phone]          VARCHAR (50)   NULL,
    [PhoneExtension] VARCHAR (10)   NULL,
    CONSTRAINT [PK_CsrInteractions] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_CsrInteraction_ContactTypes] FOREIGN KEY ([ContactTypeId]) REFERENCES [dbo].[ContactTypes] ([Id]),
    CONSTRAINT [FK_CsrInteraction_SubCategories] FOREIGN KEY ([SubCategoryId]) REFERENCES [dbo].[SubCategories] ([Id])
);



