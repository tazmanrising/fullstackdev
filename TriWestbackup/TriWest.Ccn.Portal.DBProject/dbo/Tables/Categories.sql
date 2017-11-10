CREATE TABLE [dbo].[Categories] (
    [Id]     INT          IDENTITY (1, 1) NOT NULL,
    [CategoryName]   VARCHAR (50) NULL,
    [CustomerTypeId] INT          NOT NULL,
    CONSTRAINT [PK__Categories] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Categories_CustomerTypes] FOREIGN KEY ([CustomerTypeId]) REFERENCES [dbo].[CustomerTypes] ([Id])
);


